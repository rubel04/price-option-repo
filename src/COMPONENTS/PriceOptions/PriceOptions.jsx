import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Package",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Fitness assessment",
            "Personalized workout plan",
            "Personalized workout plan"
          ]
        },
        {
          "id": 2,
          "name": "Premium Package",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Fitness assessment",
            "Personalized workout plan",
            "Group fitness classes"
          ]
        },
        {
          "id": 3,
          "name": "VIP Package",
          "price": 80,
          "features": [
            "Access to gym equipment",
            "Fitness assessment",
            "Personalized workout plan",
            "Group fitness classes",
            "Personal trainer sessions"
          ]
        }
      ]
    return (
        <div className="mx-12">
            <h2 className="text-5xl text-center my-4">Best prices in  the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;