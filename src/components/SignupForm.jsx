"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
const turkishPhoneRegex = /^(\+90|0)?\s*([0-9]{3})\s*([0-9]{3})\s*([0-9]{2})\s*([0-9]{2})$/
const taxIdRegex = /^T\d{4}V\d{6}$/
const ibanRegex = /^TR\d{2}\s?(\d{4}\s?){5}\d{2}$/

export default function SignupForm() {
    const navigate = useNavigate()
    const [roles, setRoles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            role_id: 1, // Default to Customer role
        },
    })

    const selectedRole = watch("role_id")
    const isStoreRole = Number(selectedRole) === 2 // Assuming 2 is the store role ID

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get("/roles")
                setRoles(response.data)
            } catch (error) {
                setError("Failed to fetch roles")
            }
        }

        fetchRoles()
    }, [])

    const validatePassword = (value) => {
        if (!passwordRegex.test(value)) {
            return "Password must be at least 8 characters and include numbers, lowercase, uppercase, and special characters"
        }
        return true
    }

    const validateConfirmPassword = (value) => {
        if (value !== getValues("password")) {
            return "Passwords don't match"
        }
        return true
    }

    const onSubmit = async (data) => {
        setIsLoading(true)
        setError(null)

        try {
            const submitData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: Number(data.role_id),
                ...(isStoreRole && {
                    store: {
                        name: data.store_name,
                        phone: data.store_phone,
                        tax_no: data.store_tax_no,
                        bank_account: data.store_bank_account,
                    },
                }),
            }

            console.log('Submit Data:', submitData); // Form verilerini kontrol edin

            await api.post("/signup", submitData)
            alert("You need to click link in email to activate your account!")
            navigate(-1)
        } catch (error) {
            if (error.response?.data?.code === "SQLITE_CONSTRAINT") {
                setError("This email is already registered. Please use a different email.")
            } else {
                setError(error.response?.data?.message || "Failed to sign up")
            }
            console.error('Error submitting form:', error.response?.data); // Hata mesajını konsola yazdırın
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 3, message: "Name must be at least 3 characters" },
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        validate: validatePassword,
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: validateConfirmPassword,
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <div className="mt-1">
                                <select
                                    id="role"
                                    {...register("role_id")}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {isStoreRole && (
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="store_name" className="block text-sm font-medium text-gray-700">
                                        Store Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="store_name"
                                            type="text"
                                            {...register("store_name", {
                                                required: "Store name is required",
                                                minLength: { value: 3, message: "Store name must be at least 3 characters" },
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    {errors.store_name && <p className="mt-1 text-sm text-red-600">{errors.store_name.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="store_phone" className="block text-sm font-medium text-gray-700">
                                        Store Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="store_phone"
                                            type="tel"
                                            placeholder="+90 XXX XXX XX XX"
                                            {...register("store_phone", {
                                                required: "Store phone is required",
                                                pattern: {
                                                    value: turkishPhoneRegex,
                                                    message: "Invalid Turkish phone number",
                                                },
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    {errors.store_phone && <p className="mt-1 text-sm text-red-600">{errors.store_phone.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="store_tax_no" className="block text-sm font-medium text-gray-700">
                                        Store Tax ID
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="store_tax_no"
                                            type="text"
                                            placeholder="TXXXXVXXXXXX"
                                            {...register("store_tax_no", {
                                                required: "Store tax ID is required",
                                                pattern: {
                                                    value: taxIdRegex,
                                                    message: "Tax ID must match pattern TXXXXVXXXXXX",
                                                },
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    {errors.store_tax_no && <p className="mt-1 text-sm text-red-600">{errors.store_tax_no.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="store_bank_account" className="block text-sm font-medium text-gray-700">
                                        Store Bank Account (IBAN)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="store_bank_account"
                                            type="text"
                                            placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
                                            {...register("store_bank_account", {
                                                required: "Store bank account is required",
                                                pattern: {
                                                    value: ibanRegex,
                                                    message: "Invalid IBAN format",
                                                },
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    {errors.store_bank_account && (
                                        <p className="mt-1 text-sm text-red-600">{errors.store_bank_account.message}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                ) : null}
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}