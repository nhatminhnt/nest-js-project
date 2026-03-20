export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

export enum CatStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  SOLD = 'sold',
}

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export enum PaymentStatus {
  UNPAID = 'unpaid',
  PAID = 'paid',
  REFUNDED = 'refunded',
  CANCELLED = 'cancelled',
  VOIDED = 'voided',
}

export enum PaymentProvider {
  STRIPE = 'stripe',
  MOMO = 'momo',
  ZALOPAY = 'zalopay',
}

export enum Currency {
  VND = 'VND',
  USD = 'USD',
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
  E_WALLET = 'e_wallet',
}
