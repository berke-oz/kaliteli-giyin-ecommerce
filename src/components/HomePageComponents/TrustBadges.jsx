import React from "react";
import { ShieldCheck, Truck, RotateCcw, Clock, Award, Star, Users, CreditCard } from "lucide-react";

const TrustBadges = () => {
    const trustBadges = [
        {
            icon: ShieldCheck,
            title: "Güvenli Ödeme",
            description: "Tüm işlemler şifrelenmiş ve güvenlidir",
        },
        {
            icon: Truck,
            title: "Ücretsiz Kargo",
            description: "300 TL üzeri tüm siparişlerde",
        },
        {
            icon: RotateCcw,
            title: "Kolay İade",
            description: "30 gün para iade garantisi",
        },
        {
            icon: Clock,
            title: "7/24 Destek",
            description: "Ekibimiz her zaman yardıma hazır",
        },
    ];

    const stats = [
        {
            icon: Users,
            value: "50K+",
            label: "Mutlu Müşteri",
        },
        {
            icon: Award,
            value: "15+",
            label: "Yıllık Deneyim",
        },
        {
            icon: Star,
            value: "4.9",
            label: "Ortalama Puan",
        },
        {
            icon: CreditCard,
            value: "100%",
            label: "Güvenli Ödeme",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 font-serif">Neden Bizi Tercih Etmelisiniz?</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {trustBadges.map((badge) => (
                        <div
                            key={badge.title}
                            className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105"
                        >
                            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                <badge.icon className="w-8 h-8 text-[#252B42]" />
                            </div>
                            <h3 className="font-medium text-lg mb-2">{badge.title}</h3>
                            <p className="text-gray-600 text-sm">{badge.description}</p>
                        </div>
                    ))}
                </div>


                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center text-center">
                                <stat.icon className="w-6 h-6 text-[#252B42] mb-2" />
                                <span className="text-3xl font-bold mb-1">{stat.value}</span>
                                <span className="text-gray-600 text-sm">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;