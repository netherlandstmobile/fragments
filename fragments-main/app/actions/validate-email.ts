
'use server'

export type EmailValidationResponse = {
  address: string
  status: string
  sub_status: string
  free_email: boolean
  account: string
  domain: string
  mx_found: boolean
  did_you_mean: string | null
  domain_age_days: string | null
  active_in_days: string | null
  smtp_provider: string | null
  mx_record: string | null
  firstname: string | null
  lastname: string | null
  gender: string | null
  country: string | null
  region: string | null
  city: string | null
  zipcode: string | null
  processed_at: string
}

export async function validateEmail(email: string): Promise<boolean> {
  return true
}


