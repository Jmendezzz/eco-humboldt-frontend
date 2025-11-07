import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { registerSchema, type RegisterFormValues } from "@/lib/validations/registerSchema";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Button } from "@/components/ui/Button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function RegisterForm() {
    const { mutateAsync: registerUser, isPending } = useRegister();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setSuccessMessage(null);
        setErrorMessage(null);
        try {
            const result = await registerUser(data);
            setSuccessMessage(`🎉 ¡Bienvenido, ${result.firstName}! Tu cuenta fue creada exitosamente.`);
            reset();
        } catch (error: any) {
            const message =
                error?.response?.data?.message || "Ocurrió un error durante el registro.";
            setErrorMessage(message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 text-left"
        >
            <fieldset className="space-y-4 rounded-xl border border-border/40 p-6 bg-background/40 backdrop-blur-md transition-colors">
                <legend className="px-2 text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                    Información Personal
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" {...register("firstName")} />
                        <AnimatePresence mode="wait">
                            {errors.firstName && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-destructive text-xs font-medium mt-1 "
                                >
                                    {errors.firstName.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" {...register("lastName")} />
                        <AnimatePresence mode="wait">
                            {errors.lastName && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-destructive text-xs font-medium mt-1"
                                >
                                    {errors.lastName.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </fieldset>

            <fieldset className="space-y-4 rounded-xl border border-border/40 p-6 bg-background/40 backdrop-blur-md transition-colors">
                <legend className="px-2 text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                    Credenciales de Acceso
                </legend>

                <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="tucorreo@cue.edu.co"
                            {...register("email")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-destructive text-xs font-medium mt-1"
                                >
                                    {errors.email.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register("password")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.password && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-destructive text-xs font-medium mt-1"
                                >
                                    {errors.password.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </fieldset>

            <div className="text-center mt-2">
                <Button
                    type="submit"
                    size="lg"
                    className="font-semibold shadow-md w-full sm:w-auto px-8"
                    disabled={isSubmitting || isPending}
                >
                    {isSubmitting || isPending ? <Spinner /> : "Registrarse"}
                </Button>
            </div>

            <div className="mt-3">
                <AnimatePresence mode="wait">
                    {successMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert className="border-green-600/40 bg-green-50 dark:bg-green-950/40 dark:border-green-700/40">
                                <AlertDescription className="text-green-700 dark:text-green-300">
                                    {successMessage}
                                </AlertDescription>
                            </Alert>
                        </motion.div>
                    )}

                    {errorMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert className="border-destructive/40 bg-destructive/10">
                                <AlertDescription className="text-destructive">
                                    {errorMessage}
                                </AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
}
