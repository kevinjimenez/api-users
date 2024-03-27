import { RegexInterface } from './../interfaces/regex.interface';

export class Regex {
  public static readonly password: RegexInterface = {
    regex: /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  };
}
