import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertCurrency(amount: string | number) {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(+amount);
}

export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
