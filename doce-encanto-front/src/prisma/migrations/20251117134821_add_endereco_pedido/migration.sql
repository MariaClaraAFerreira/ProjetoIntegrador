/*
  Warnings:

  - Added the required column `bairro` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clienteId" INTEGER NOT NULL,
    "dataPedido" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "valorTotal" REAL NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("clienteId", "dataPedido", "id", "status", "valorTotal") SELECT "clienteId", "dataPedido", "id", "status", "valorTotal" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
