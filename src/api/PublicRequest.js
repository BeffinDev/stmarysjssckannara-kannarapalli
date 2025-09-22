import axios from './Axios'

export const administrationDetails = () => axios.get('/public/administration-details')

export const getGalleryImages = () => axios.get('/public/gallery-images')

export const getSocialMedias = () => axios.get('/public/getSocialMedias')

export const saveContactMessage = (data) => axios.post('/public/save-contactMessage', data)
