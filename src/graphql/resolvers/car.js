export default {
  Query: {
    getAllCars: async (parent, args, { Car }, info) => {
      let cars = await Car.find();
      return cars;
    },
    getSingleCar: async (parent, { objectId }, { Car }, info) => {
      console.log(Car);
      let car = await Car.findOne({ objectId });
      return car;
    },
  },
  Mutation: {
    addCar: async (parent, { carInput }, { Car }, info) => {
      let newCar = await Car.create({
        ...carInput,
      });
      return newCar;
    },
  },
};
