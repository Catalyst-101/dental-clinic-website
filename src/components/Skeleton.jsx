import React from 'react';

export const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-surface-container-high/60 rounded-xl ${className}`}
      {...props}
    />
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 space-y-4 shadow-sm">
      <Skeleton className="w-full h-48 rounded-xl" />
      <Skeleton className="w-2/3 h-6 rounded-md" />
      <Skeleton className="w-full h-4 rounded-md" />
      <Skeleton className="w-4/5 h-4 rounded-md" />
      <div className="pt-2 flex justify-between items-center">
        <Skeleton className="w-24 h-8 rounded-lg" />
        <Skeleton className="w-16 h-8 rounded-lg" />
      </div>
    </div>
  );
};

export const SkeletonProfile = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 space-y-4 shadow-sm text-center flex flex-col items-center">
      <Skeleton className="w-24 h-24 rounded-full" />
      <Skeleton className="w-1/2 h-6 rounded-md" />
      <Skeleton className="w-1/3 h-4 rounded-md" />
      <Skeleton className="w-full h-16 rounded-xl" />
    </div>
  );
};

export default Skeleton;
