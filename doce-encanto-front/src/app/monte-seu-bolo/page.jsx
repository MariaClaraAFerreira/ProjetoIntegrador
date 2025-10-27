"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cake, Heart, Calculator, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function MonteSeuBolo() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <Link href="/">
              <div className="relative bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo_amor1.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="p-1 rounded-full"
                  />

                  <span className="text-white font-bold text-2xl tracking-wide drop-shadow-lg">
                    Doce Encanto
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
            <Link
              href="/"
              className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
            >
              Início
            </Link>
            <Link
              href="/"
              className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/"
              className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
            >
              Produtos
            </Link>
            <Link
              href="/monte-seu-bolo"
              className="px-6 py-2 rounded-full  bg-gradient-to-r from-blue-300 to-blue-200 text-white 
           hover:from-blue-100 hover:to-blue-200 transition-all duration-200 font-medium shadow-lg"
            >
              Monte seu Bolo
            </Link>
            <Link
              href="/"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium shadow-lg"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cake className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Monte seu Bolo
          </h1>
          <p className="text-gray-600">Personalize seu bolo dos sonhos</p>
        </div>

        {/* Card do formulário */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
            <CardTitle className="flex items-center gap-2 text-xl"></CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Produto Base */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Escolha o Bolo Base
              </Label>
              <Select>
                <SelectTrigger className="h-12 border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Selecione um bolo base" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Bolo de Chocolate</SelectItem>
                  <SelectItem value="2">Bolo de Baunilha</SelectItem>
                  <SelectItem value="3">Bolo Red Velvet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Massa */}
            <div className="space-y-2">
              <Label
                htmlFor="massa"
                className="text-sm font-medium text-gray-700"
              >
                Tipo de Massa
              </Label>
              <Input
                id="massa"
                type="text"
                placeholder="Ex: Massa de baunilha"
                className="h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            {/* Recheio */}
            <div className="space-y-2">
              <Label
                htmlFor="recheio"
                className="text-sm font-medium text-gray-700"
              >
                Recheio
              </Label>
              <Input
                id="recheio"
                type="text"
                placeholder="Ex: Doce de leite com coco"
                className="h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            {/* Cobertura */}
            <div className="space-y-2">
              <Label
                htmlFor="cobertura"
                className="text-sm font-medium text-gray-700"
              >
                Cobertura
              </Label>
              <Input
                id="cobertura"
                type="text"
                placeholder="Ex: Chantilly com morangos"
                className="h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            {/* Intolerante à lactose */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-orange-500" />
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Intolerante à lactose
                  </Label>
                  <p className="text-xs text-gray-500">
                    Versão sem lactose (+25% no valor)
                  </p>
                </div>
              </div>
              <Switch />
            </div>

            {/* Botão */}
            <Button className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Calcular Preço
              </div>
            </Button>

            {/* Resultado do preço (estático) */}
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-semibold text-gray-700">
                    Preço Final
                  </span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  R$ 0,00
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 border-yellow-300"
                  >
                    <Heart className="w-3 h-3 mr-1" />
                    Sem lactose (+25%)
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Preço base: R$ 0,00
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="bg-pink-500 text-white py-6 mt-12 w-full">
        <div className="container mx-auto text-center">
          <p className="text-xl font-bold">Obrigada por nos visitar!</p>
          <p>
            &copy; {new Date().getFullYear()} Doce Encanto. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
