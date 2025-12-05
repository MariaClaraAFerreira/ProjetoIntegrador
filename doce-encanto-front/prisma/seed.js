import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Iniciando seed...");

  // Criar produtos
  const produtosExistem = await prisma.produto.count();
  
  if (produtosExistem === 0) {
    await prisma.produto.createMany({
      data: [
        {
          nome: "Bolo de Chocolate",
          descricao: "Bolo delicioso com cobertura de chocolate",
          preco: 45.0,
          imagemUrl: "https://via.placeholder.com/300x300?text=Bolo+Chocolate",
        },
        {
          nome: "Bolo de Morango",
          descricao: "Bolo fresco com morangos naturais",
          preco: 50.0,
          imagemUrl: "https://via.placeholder.com/300x300?text=Bolo+Morango",
        },
        {
          nome: "Bolo de Vanilla",
          descricao: "Clássico bolo de baunilha",
          preco: 40.0,
          imagemUrl: "https://via.placeholder.com/300x300?text=Bolo+Vanilla",
        },
        {
          nome: "Cupcake Chocolate",
          descricao: "Cupcake pequeno de chocolate",
          preco: 8.0,
          imagemUrl: "https://via.placeholder.com/300x300?text=Cupcake",
        },
        {
          nome: "Brownie",
          descricao: "Brownie caseiro com chocolate belga",
          preco: 12.0,
          imagemUrl: "https://via.placeholder.com/300x300?text=Brownie",
        },
      ],
    });
    console.log("✅ Produtos criados!");
  }

  // Verifica se já existe um admin
  const adminExiste = await prisma.cliente.findUnique({
    where: { email: "admin@admin.com" },
  });

  if (!adminExiste) {
    // Criptografa a senha
    const senhaHash = await bcrypt.hash("pablinny123", 10);

    // Cria usuário admin
    await prisma.cliente.create({
      data: {
        nome: "Administrador",
        email: "admin@admin.com",
        senha: senhaHash,
        nivel: "admin",
        telefone: "00000000000",
        endereco: "Painel Administrativo",
      },
    });
    console.log("🎉 Admin criado com sucesso!");
  } else {
    console.log("✔ Admin já existe.");
  }

  // Criar cliente de teste
  const clienteExiste = await prisma.cliente.findUnique({
    where: { email: "teste@example.com" },
  });

  if (!clienteExiste) {
    const senhaHash = await bcrypt.hash("senha123", 10);
    await prisma.cliente.create({
      data: {
        nome: "Cliente Teste",
        email: "teste@example.com",
        senha: senhaHash,
        telefone: "11999999999",
        endereco: "Rua Teste, 123",
        nivel: "usuario",
      },
    });
    console.log("👤 Cliente de teste criado!");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });