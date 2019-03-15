export class StringConventer {
  public static transformString(fullName: string) {
    return fullName.replace(/\s/g, "").toLowerCase();
  }
} 