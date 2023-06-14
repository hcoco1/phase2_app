import React from 'react';
import { useForm } from 'react-hook-form';

export default function AgentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <select {...register("Operation Type")} className="agentForm">
        <option value="Sale">Sale</option>
        <option value="Rent">Rent</option>
      </select>
      <select {...register("Property Type")} className="agentForm">
        <option value="Apartment">Apartment</option>
        <option value="Condo">Condo</option>
        <option value="Farm">Farm</option>
        <option value="Land">Land</option>
        <option value="Townhome">Townhome</option>
        <option value="House">House</option>
      </select>
      <input type="number" placeholder="Listing Price" {...register("Listing Price", {})} />
      <input type="number" placeholder="Bathrooms" {...register("Bathrooms", {})} />
      <input type="number" placeholder="Bedrooms" {...register("Bedrooms", {})} />
      <input type="number" placeholder="Square feet" {...register("Square feet", {})} />
      <input type="text" placeholder="Address" {...register("Address", {required: true, max: 80, min: 3, maxLength: 80})} />
      <input type="text" placeholder="City" {...register("City", {required: true, maxLength: 100})} />
      <input type="text" placeholder="State" {...register("State", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="number" placeholder="Zip code" {...register("Zip code", {required: true, maxLength: 12})} />
      <input type="url" placeholder="image" {...register("image", {})} />

      <input type="submit" />
    </form>
  );
}