export const formatType = (type, courseType, scholarshipDate, sort) => {
  if (type === 'course' && courseType !== '-') {
    return courseType
  }
  if (type === 'scholarship' && scholarshipDate !== '-') {
    return scholarshipDate
  }
  if (type === 'sort' && sort !== '-') {
    return sort
  }
  return 'Todos'
}

export const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('pt-BR')
}

export const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}
