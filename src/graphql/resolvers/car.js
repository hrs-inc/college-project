export default {
  Query: {
    getAllCars: async (parent, args, { Car }, info) => {
      let cars = await Car.find();
      return cars;
    },
    getSingleCar: async (parent, { objectId }, { Car }, info) => {
      let car = await Car.findOne({ objectId });
      return car;
    },
    getArgumentCars: async (parent, { category }, { Car }, info) => {
      let cars = await Car.find();
      return cars.filter((car) => car.category === category);
    },
  },
  Mutation: {
    addCar: async (parent, { carInput }, { Car }, info) => {
      let newCar = await Car.create({
        ...carInput,
      });
      return newCar;
    },
    addCategory: async (parent, { name }, { Category }, info) => {
      let categories = await Category.create({ name });
      return categories;
    },
  },
};
