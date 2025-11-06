import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { loginSchema, type LoginFormValues } from "@/lib/validations/loginSchema";

export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        console.log("Login data:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
        >
            <div className="text-left">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div className="text-left">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                )}
            </div>

            <Button
                type="submit"
                size="lg"
                className="mt-2 font-semibold shadow-md"
                disabled={isSubmitting}
            >
                {isSubmitting ? <Spinner /> : "Iniciar sesión"}
            </Button>
        </form>
    );
}
