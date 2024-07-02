"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("email", { email: data.email, redirect: false });
      toast({
        title: "Link de autenticação enviado",
        description: "Verifique seu email para fazer login",
      });
    } catch (error) {
      toast({
        title: "Ops... houve um problema",
      });
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            {isLoginForm ? "Sign in to your account" : "Create a new account"}
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Insira seu email..."
                {...form.register("email")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Insira sua senha..."
                {...form.register("password")}
              />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {isLoginForm ? (
            <>
              <button
                type="button"
                className="font-medium text-primary hover:text-primary-foreground"
                onClick={() => setIsLoginForm(false)}
              >
                Não possui uma conta ?
              </button>
            </>
          ) : (
            <>
              Já possui uma conta?{" "}
              <button
                type="button"
                className="font-medium text-primary hover:text-primary-foreground"
                onClick={() => setIsLoginForm(true)}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
