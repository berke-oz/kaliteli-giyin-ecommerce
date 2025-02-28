import React from 'react';
import { useForm } from 'react-hook-form';
import { turkishCities } from '../../utils/constants';


const AddressForm = ({ initialData, onSubmit, onCancel }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {}
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Adres Başlığı
                    </label>
                    <input
                        {...register("title", { required: "Adres başlığı gerekli" })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ad
                    </label>
                    <input
                        {...register("name", { required: "Ad gerekli" })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soyad
                    </label>
                    <input
                        {...register("surname", { required: "Soyad gerekli" })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.surname && (
                        <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                    </label>
                    <input
                        {...register("phone", {
                            required: "Telefon gerekli",
                            pattern: {
                                value: /^[0-9]{10,11}$/,
                                message: "Geçerli bir telefon numarası girin"
                            }
                        })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        İl
                    </label>
                    <select
                        {...register("city", { required: "İl seçimi gerekli" })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    >
                        <option value="">İl Seçin</option>
                        {turkishCities.map(city => (
                            <option key={city} value={city.toLowerCase()}>
                                {city}
                            </option>
                        ))}
                    </select>
                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        İlçe
                    </label>
                    <input
                        {...register("district", { required: "İlçe gerekli" })}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.district && (
                        <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
                    )}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mahalle ve Açık Adres
                    </label>
                    <textarea
                        {...register("neighborhood", { required: "Açık adres gerekli" })}
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2
                                 focus:ring-[#23A6F0] focus:border-[#23A6F0]"
                    />
                    {errors.neighborhood && (
                        <p className="text-red-500 text-sm mt-1">{errors.neighborhood.message}</p>
                    )}
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700
                             hover:bg-gray-50 transition-colors duration-200"
                >
                    İptal
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#23A6F0] text-white rounded-lg
                             hover:bg-[#1B80BD] transition-colors duration-200"
                >
                    {initialData ? 'Güncelle' : 'Kaydet'}
                </button>
            </div>
        </form>
    );
};

export default AddressForm; 