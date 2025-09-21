import { UserRole } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tw from 'twrnc';

// React Native compatible className utility using twrnc
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to create styles with twrnc
export function createStyles(classes: string) {
  return tw(classes);
}

export function formatCurrency(amount: number, currency: string = 'NGN'): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getRoleDisplayName(role: UserRole): string {
  const roleDisplayNames: Record<UserRole, string> = {
    individual_customer: 'Individual Customer',
    corporate_driver: 'Corporate Driver',
    company_admin: 'Company Admin',
    branch_manager: 'Branch Manager',
    branch_staff: 'Branch Staff',
    corporate_admin: 'Corporate Admin',
    corporate_branch: 'Corporate Branch',
    station_owner: 'Station Owner',
    station_staff: 'Station Staff',
    system_admin: 'System Admin',
    support_agent: 'Support Agent',
    delivery_staff: 'Delivery Staff',
  };
  return roleDisplayNames[role] || role;
}

export function getOnboardingPath(role: UserRole): string | null {
  const paths: Record<UserRole, string> = {
    individual_customer: '/onboarding/individual',
    corporate_driver: '/onboarding/driver',
    company_admin: '/onboarding/company',
    branch_manager: '/onboarding/branch-manager',
    branch_staff: '/onboarding/branch-staff',
    corporate_admin: '/onboarding/corporate',
    corporate_branch: '/onboarding/corporate-branch',
    station_owner: '/onboarding/station-owner',
    station_staff: '/onboarding/station-staff',
    system_admin: '/onboarding/system-admin',
    support_agent: '/onboarding/support-agent',
    delivery_staff: '/onboarding/delivery-staff',
  };
  return paths[role] || null;
}

export function getDashboardPath(role: UserRole): string {
  const paths: Record<UserRole, string> = {
    individual_customer: '/dashboard',
    corporate_driver: '/dashboard',
    company_admin: '/admin/dashboard',
    branch_manager: '/branch/dashboard',
    branch_staff: '/branch/orders',
    corporate_admin: '/corporate/dashboard',
    corporate_branch: '/corporate/branch',
    station_owner: '/station/dashboard',
    station_staff: '/station/orders',
    system_admin: '/admin/system',
    support_agent: '/support/dashboard',
    delivery_staff: '/delivery/dashboard',
  };
  return paths[role] || '/dashboard';
}

export function hasPermission(role: UserRole, requiredRole: UserRole): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    system_admin: 10,
    company_admin: 9,
    corporate_admin: 8,
    station_owner: 7,
    branch_manager: 6,
    corporate_branch: 5,
    support_agent: 4,
    branch_staff: 3,
    station_staff: 3,
    corporate_driver: 2,
    delivery_staff: 2,
    individual_customer: 1,
  };
  return roleHierarchy[role] >= roleHierarchy[requiredRole];
}

export function getOnboardingTitle(role: UserRole): string {
  switch (role) {
    case 'individual_customer':
      return 'Complete Your Profile';
    case 'corporate_driver':
      return 'Driver Onboarding';
    case 'company_admin':
      return 'Company Setup';
    case 'branch_manager':
      return 'Branch Manager Setup';
    case 'branch_staff':
      return 'Staff Onboarding';
    case 'corporate_admin':
      return 'Corporate Account Setup';
    case 'corporate_branch':
      return 'Branch Registration';
    case 'station_owner':
      return 'Station Owner Setup';
    case 'station_staff':
      return 'Station Staff Onboarding';
    case 'system_admin':
      return 'System Administrator Setup';
    case 'support_agent':
      return 'Support Agent Onboarding';
    case 'delivery_staff':
      return 'Delivery Staff Setup';
    default:
      return 'Welcome to FuelCore';
  }
}
