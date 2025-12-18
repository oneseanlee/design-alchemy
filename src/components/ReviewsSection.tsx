import { Star } from "lucide-react";

const reviews = [
  {
    initials: "JD",
    name: "James D.",
    text: '"Found a tracker on my rental car during a trip to Miami. It was tucked way up in the wheel well. This thing started beeping like crazy. Worth every penny."',
  },
  {
    initials: "SK",
    name: "Sarah K.",
    text: '"I travel for work constantly. This gives me peace of mind in every hotel room. Easy to use, and the silent mode is a lifesaver. Highly recommend."',
  },
  {
    initials: "MT",
    name: "Mike T.",
    text: '"As a real estate agent, I\'m in strange houses every day. The T66 is now part of my standard kit. Feels good knowing I have that extra layer of security."',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-medium text-white mb-12 tracking-tight text-center">Peace of mind delivered.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#121212] p-6 rounded-2xl border border-white/5">
              <div className="flex mb-4 text-red-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 font-light text-lg mb-6">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium">
                  {review.initials}
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">{review.name}</div>
                  <div className="text-white/40">Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
