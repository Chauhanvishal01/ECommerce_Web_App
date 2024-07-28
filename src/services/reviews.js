export const getStars = (rating) => {
    return '⭐'.repeat(rating) + '✩'.repeat(5 - rating);
  };
  