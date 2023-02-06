import { cityRegexp, dateRegexp, houseRegexp, nameRegexp, phoneRegexp, streetRegexp } from './regexp'
import { IOrderFormErrors, IOrderFormValues } from './types'

export const defaultValues: IOrderFormValues = {
    lastname: '',
    firstname: '',
    patronymic: '',
    nonePatronymic: false,
    phoneNumber: '',
    birthDate: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    noneApartment: false,
    comment: ''
}

export const getErrors = (values: IOrderFormValues): IOrderFormErrors => {
    const errors: IOrderFormErrors = {}

    Object.keys(values).forEach((key) => {
        if (
            values[key] === '' &&
            key !== 'comment' &&
            key !== 'nonePatronymic' &&
            key !== 'noneApartment' &&
            key !== 'patronymic' &&
            key !== 'apartment'
        ) {
            errors[key] = 'заполните поле'
        }
    })

    if (!values.patronymic && !values.nonePatronymic) {
        errors.patronymic = 'введите отчество или поставте галочку'
    } else if (values.patronymic && !values.nonePatronymic && !nameRegexp.test(values.patronymic)) {
        errors.patronymic = 'не валидное отчество'
    }

    if (!values.apartment && !values.noneApartment) {
        errors.apartment = 'введите квартиру или поставте галочку'
    } else if (!values.noneApartment && values.apartment && !houseRegexp.test(values.apartment)) {
        errors.apartment = 'не валидная квартира'
    }

    if (!nameRegexp.test(values.firstname) && values.firstname) {
        errors.firstname = 'не валидное имя'
    }

    if (!nameRegexp.test(values.lastname) && values.lastname) {
        errors.lastname = 'не валидная фамилия'
    }

    if (!phoneRegexp.test(values.phoneNumber) && values.phoneNumber) {
        errors.phoneNumber = 'не валидный телефон'
    }

    if (!cityRegexp.test(values.city) && values.city) {
        errors.city = 'не валидный город'
    }

    if (!streetRegexp.test(values.street) && values.street) {
        errors.street = 'не валидная улица'
    }

    if (!houseRegexp.test(values.house) && values.house) {
        errors.house = 'не валидный дом'
    }

    if (!dateRegexp.test(values.birthDate) && values.birthDate) {
        errors.birthDate = 'не валидная дата'
    }

    return errors
}
