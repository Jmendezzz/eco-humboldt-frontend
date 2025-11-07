import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { loginSchema, type LoginFormValues } from "@/lib/validations/loginSchema";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { useLogin } from "../hooks/useLogin";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const { mutateAsync: loginUser, isPending } = useLogin();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = async (data: LoginFormValues) => {
        setErrorMessage(null);
        try {
            await loginUser(data);
        } catch (err: any) {
            const message = err?.response?.data?.message || "Error al iniciar sesión.";
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
            <div className="text-left">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" {...register("email")} />
                {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div className="text-left">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
                {errors.password && (
                    <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                )}
            </div>

            <Button
                type="submit"
                size="lg"
                className="mt-2 font-semibold shadow-md"
                disabled={isSubmitting || isPending}
            >
                {isSubmitting || isPending ? <Spinner /> : "Iniciar sesión"}
            </Button>

            <AnimatePresence mode="wait">
                {errorMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Alert className="mt-3 border-destructive/40 bg-destructive/10">
                            <AlertDescription className="text-destructive text-sm">
                                {errorMessage}
                            </AlertDescription>
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}
