const ReviewsPage = () => {
    const reviews = [
      {
        id: 1,
        name: "Ryan M",
        date: "October 21, 2020",
        rating: 5,
        comment: "Amazing and durable jacket. Highly recommend!",
      },
      {
        id: 2,
        name: "Emily J",
        date: "October 20, 2020",
        rating: 4,
        comment: "Great quality but the size runs slightly smaller.",
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Reviews</h1>
  
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-bold">{review.name}</div>
                <div className="text-gray-500 text-sm">{review.date}</div>
              </div>
              <div className="flex items-center mb-2">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                {Array(5 - review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span>
                  ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewsPage;
  