class IPaymentProcess {
  process(amount) {
    throw new Error("Method 'processPayment' must be implemented.");
  }
}
export default IPaymentProcess;