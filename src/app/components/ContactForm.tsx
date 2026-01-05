"use client";

import { useState } from "react";

type Errors = {
    email?: string;
    message?: string;
    global?: string;
};

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<{ email?: boolean; message?: boolean }>({});
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const isEmailValid = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const validate = () => {
        const newErrors: Errors = {};

        if (!email || !isEmailValid(email)) {
            newErrors.email = "Veuillez entrer une adresse email valide";
        }

        if (!message || message.trim().length < 10) {
            newErrors.message = "Votre message doit contenir au moins 10 caractères";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSent(false);

        if (!validate()) return;

        setLoading(true);
        setErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    params: {
                        email,
                        message: JSON.stringify({ message }),
                    },
                }),
            });

            if (!res.ok) throw new Error("Erreur serveur");

            setEmail("");
            setMessage("");
            setTouched({});
            setSent(true);
        } catch {
            setErrors({ global: "Une erreur est survenue. Veuillez réessayer." });
        } finally {
            setLoading(false);
        }
    };

    const isDisabled =
        loading ||
        !email ||
        !message ||
        !isEmailValid(email) ||
        message.trim().length < 10;

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-2xl p-8 md:p-10 shadow-xl flex flex-col gap-5 min-h-[380px]"
        >
            {/* Email */}
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    placeholder="Votre email"
                    className="w-full border border-neutral-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    placeholder="Votre message"
                    rows={6}
                    className="w-full border border-neutral-300 rounded-lg px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {touched.message && errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
            </div>

            {errors.global && (
                <p className="text-red-600 text-sm">{errors.global}</p>
            )}

            {sent && (
                <p className="text-green-600 text-sm">
                    Message envoyé avec succès
                </p>
            )}

            <button
                type="submit"
                disabled={isDisabled}
                className="mt-auto bg-primary-dark text-white font-semibold py-3 rounded-lg transition
                disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary"
            >
                {loading ? "Envoi de votre message..." : "Envoyer"}
            </button>
        </form>
    );
}
