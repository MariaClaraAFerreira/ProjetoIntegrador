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
import Header from "../componentes/header";

export default function MonteSeuBolo() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      <Header />
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-8 mt-30 mb-12 rounded-lg shadow-lg">
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
            {/* Massa */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Escolha a massa do seu bolo
              </Label>
              <Select>
                <SelectTrigger className="h-12 border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Selecione uma massa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Bolo de Chocolate</SelectItem>
                  <SelectItem value="2">Bolo de Baunilha</SelectItem>
                  <SelectItem value="3">Bolo Red Velvet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Recheio */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Escolha o recheio do seu bolo
              </Label>
              <Select>
                <SelectTrigger className="h-12 border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Selecione um recheio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Bolo de Chocolate</SelectItem>
                  <SelectItem value="2">Bolo de Baunilha</SelectItem>
                  <SelectItem value="3">Bolo Red Velvet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cobertura */}
            <Label className="text-sm font-medium text-gray-700">
              Escolha a cobertura do seu bolo
            </Label>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="h-12 border-purple-200 focus:border-purple-400">
                  <SelectValue placeholder="Selecione uma cobertura" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Bolo de Chocolate</SelectItem>
                  <SelectItem value="2">Bolo de Baunilha</SelectItem>
                  <SelectItem value="3">Bolo Red Velvet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cobertura */}
            <div className="space-y-2">
              <Label
                htmlFor="cobertura"
                className="text-sm font-medium text-gray-700"
              >
                Descreva a decoração do seu bolo
              </Label>
              <Input
                id="cobertura"
                type="text"
                placeholder="Ex: flores vermelhas, confeitos coloridos..."
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
    </div>
  );
}
