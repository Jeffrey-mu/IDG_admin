export class Result {
  static success(data: any) {
    return {
      code: 200,
      success: true,
      result: data,
    };
  }
}
