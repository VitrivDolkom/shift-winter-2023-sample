import { ErrorFieldProps } from './types'
import s from './s.module.css'

const ErrorField = ({ handleChange, value, error, inputName, placeholder, inputClass }: ErrorFieldProps) => (
    <div className={s.errorWrapper}>
        <input
            className={inputClass}
            type="text"
            name={inputName}
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
        />
        {!!error && <span className={s.error}>{error} </span>}
    </div>
)

export default ErrorField
