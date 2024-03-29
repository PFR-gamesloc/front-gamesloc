export const regex = {
  nameRegex: /^[a-zA-Zàáâäãåçèéêëìíîïñòóôöõøùúûüýÿ'\-\s]{2,}$/,
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phoneNumberRegex: /^[0-9]{10}$/,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#=@$!%?&^*,;_-])[A-Za-z\d#=@$!%?&^*,;_-]{8,50}$/,
  streetNumberRegex: /^\d+\s?[a-zA-Z]?(?:\s?-\s?\d+)?$/,
  complementaryNumberRegex: /^\s?(?:BIS|TER|QUARTER)?$/,
  postalCodeRegex: /^(?:\d{5}|2A\d{3}|2B\d{3})$/,
  streetNameRegex: /^[a-zA-ZÀ-ÖØ-öø-ÿ]['a-zA-ZÀ-ÖØ-öø-ÿ0-9\s,'’\-]*$/,
  cityNameRegex: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'\-]*$/,
  integerRegex: /^[0-9]+$/,
  decimalRegex: /^[0-9]+(\.[0-9]+)?$/,
}
