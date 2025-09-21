
// // import { UserRole } from '@/types/auth';
// // import { cn } from '@/lib/utils';
// // import { getRoleLabel } from '@/utils/permissions';
// // import { useAuthHook } from '@/hooks/useAuth';

// const ROLE_COLORS: Record<UserRole, string> = {
//   super_admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-700',
//   system_admin: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700',
//   company_admin: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-700',
//   branch_manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700',
//   branch_staff: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700',
//   station_owner: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300 border-violet-200 dark:border-violet-700',
//   station_staff: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 border-teal-200 dark:border-teal-700',
//   corporate_admin: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
//   corporate_branch: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-200 dark:border-pink-700',
//   corporate_driver: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-700',
//   individual_customer: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
//   delivery_staff: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700',
//   support_agent: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300 border-lime-200 dark:border-lime-700',
//   auditor: 'bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300 border-stone-200 dark:border-stone-700',
//   kyc_reviewer: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300 border-sky-200 dark:border-sky-700',
//   government_oversight: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300 border-slate-200 dark:border-slate-700',
//   api_client: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700',
//   analytics_consumer: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700',
// };

// const ROLE_ICONS: Record<UserRole, string> = {
//   super_admin: '👑',
//   system_admin: '🛠️',
//   company_admin: '🏢',
//   branch_manager: '👔',
//   branch_staff: '👷',
//   station_owner: '⛽',
//   station_staff: '🔧',
//   corporate_admin: '🏢',
//   corporate_branch: '🏬',
//   corporate_driver: '🚚',
//   individual_customer: '👤',
//   delivery_staff: '🚴',
//   support_agent: '💬',
//   auditor: '📋',
//   kyc_reviewer: '🔍',
//   government_oversight: '🏛️',
//   api_client: '🤖',
//   analytics_consumer: '📊',
// };

// interface RoleBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
//   role: UserRole;
//   showIcon?: boolean;
//   showLabel?: boolean;
//   size?: 'sm' | 'md' | 'lg';
//   className?: string;
// }

// /**
//  * A badge component that displays a user's role with appropriate styling
//  */
// export const RoleBadge: React.FC<RoleBadgeProps> = ({
//   role,
//   showIcon = true,
//   showLabel = true,
//   size = 'md',
//   className,
//   ...props
// }) => {
//   const sizeClasses = {
//     sm: 'text-xs px-2 py-0.5',
//     md: 'text-sm px-2.5 py-1',
//     lg: 'text-base px-3 py-1.5',
//   };

//   return (
//     <span
//       className={cn(
//         'inline-flex items-center rounded-full border font-medium whitespace-nowrap',
//         ROLE_COLORS[role],
//         sizeClasses[size],
//         className
//       )}
//       {...props}
//     >
//       {showIcon && <span className="mr-1.5">{ROLE_ICONS[role]}</span>}
//       {showLabel && getRoleLabel(role)}
//     </span>
//   );
// };

// /**
//  * A component that displays the current user's role
//  */
// interface CurrentUserRoleBadgeProps extends Omit<RoleBadgeProps, 'role'> {
//   userRole?: UserRole;
// }

// export const CurrentUserRoleBadge: React.FC<CurrentUserRoleBadgeProps> = ({
//   userRole,
//   ...props
// }) => {
//   const { user } = useAuthHook();
//   const role = user?.role || null;
//   const roleToDisplay = userRole || role;
  
//   if (!roleToDisplay) return null;
  
//   return <RoleBadge role={roleToDisplay} {...props} />;
// };
