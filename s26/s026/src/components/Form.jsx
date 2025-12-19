import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const schema = z.object({
    name: z.string().min(3).max(255),
    price: z.number().min(10).max(1000),
    count: z
      .number("باید عدد باشه")
      .min(1, "حداقل یکی")
      .max(1000, "نهایتا هزارتا"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 0,
      count: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-green-200 p-3">
      <div className="p-2">
        <label className="block" htmlFor="product_name">
          Name
        </label>
        <input {...register("name")} id="product_name" className="bg-white" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>
      <div className="p-2">
        <label className="block" htmlFor="product_price">
          Price
        </label>
        <input
          {...register("price", {
            valueAsNumber: true,
          })}
          type="number"
          step={10}
          min={0}
          id="product_price"
          className="bg-white"
        />
        <p className="text-red-700">{errors.price?.message}</p>
      </div>
      <div className="p-2">
        <label className="block" htmlFor="product_count">
          Count
        </label>
        <input
          {...register("count", {
            valueAsNumber: true,
          })}
          type="number"
          min={0}
          id="product_count"
          className="bg-white"
        />
        <p className="text-red-700">{errors.count?.message}</p>
      </div>
      <button type="submit" className="bg-green-950 p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
