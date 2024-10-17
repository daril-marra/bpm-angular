import { AbstractControl, ValidationErrors } from "@angular/forms"

export const DEFAULT_CATEGORIA = {code: '00', label: 'TUTTI' }

export const CATEGORIE = [
  DEFAULT_CATEGORIA,
  {code: '01', label: 'CC' },
  {code: '19', label: 'DR' },
  {code: '20', label: 'CT' },
]

export const categorieValidator = (control: AbstractControl): ValidationErrors|null => {
  const valid = CATEGORIE.some((e) => control.value === e.code);
  return valid ? null : {"invalidCategory": true}
}
