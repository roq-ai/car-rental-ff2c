import * as yup from 'yup';

export const performanceAssessmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
