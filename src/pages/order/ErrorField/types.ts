export interface ErrorFieldProps {
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void
    value: string
    error: string | undefined
    inputName: string
    placeholder: string
    inputClass?: string
}
