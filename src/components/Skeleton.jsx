import React from 'react';

export const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-surface-container-high/70 rounded-xl ${className}`}
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
      <Skeleton className="w-28 h-28 rounded-full" />
      <Skeleton className="w-1/2 h-6 rounded-md" />
      <Skeleton className="w-1/3 h-4 rounded-md" />
      <Skeleton className="w-full h-12 rounded-xl" />
      <Skeleton className="w-3/4 h-10 rounded-full mt-2" />
    </div>
  );
};

export const SkeletonStat = () => {
  return (
    <div className="text-center p-md flex flex-col items-center space-y-2">
      <Skeleton className="w-28 h-12 rounded-lg" />
      <Skeleton className="w-36 h-4 rounded-md" />
    </div>
  );
};

export const SkeletonTestimonial = () => {
  return (
    <div className="glass-morphism p-6 md:p-8 rounded-2xl flex flex-col justify-between h-64 border border-outline-variant/20 shadow-sm space-y-4">
      <div className="space-y-3">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-4 h-4 rounded-full" />
          ))}
        </div>
        <Skeleton className="w-full h-4 rounded-md" />
        <Skeleton className="w-5/6 h-4 rounded-md" />
        <Skeleton className="w-4/6 h-4 rounded-md" />
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="w-1/2 h-4 rounded-md" />
          <Skeleton className="w-1/3 h-3 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonGallery = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm h-64">
      <Skeleton className="w-full h-full rounded-2xl" />
    </div>
  );
};

export const SkeletonDetail = () => {
  return (
    <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-8">
      <Skeleton className="w-full h-72 rounded-3xl" />
      <div className="space-y-4">
        <Skeleton className="w-1/3 h-8 rounded-lg" />
        <Skeleton className="w-full h-5 rounded-md" />
        <Skeleton className="w-11/12 h-5 rounded-md" />
        <Skeleton className="w-4/5 h-5 rounded-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <Skeleton className="w-full h-40 rounded-2xl" />
        <Skeleton className="w-full h-40 rounded-2xl" />
      </div>
    </div>
  );
};

export const SkeletonContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-md">
        <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="w-24 h-4 rounded" />
          <Skeleton className="w-full h-4 rounded" />
        </div>
      </div>
      <div className="flex items-start gap-md">
        <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="w-20 h-4 rounded" />
          <Skeleton className="w-40 h-4 rounded" />
        </div>
      </div>
      <div className="flex items-start gap-md">
        <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
        <div className="space-y-2 flex-1">
          <Skeleton className="w-24 h-4 rounded" />
          <Skeleton className="w-36 h-4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
