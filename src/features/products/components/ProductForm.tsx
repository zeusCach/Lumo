"use client";

import { useActionState, useEffect } from "react";
import { createProductAction} from "../actions";
import { useRouter } from "next/navigation";
import { CreateProductState } from "../types/create-product-state";

const initialState: CreateProductState = {};

export default function ProductForm() {
  const [state, formAction, isPending] = useActionState(
    createProductAction,
    initialState,
  );

  const router = useRouter();

  useEffect(() => {
    if(state.success){
        router.push('/dashboard/products');
    }
  },[state.success, router]);

  return (
    <>
      <form action={formAction} className="max-w-2xl">
        <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200 bg-white">
          {/* Información general */}
          <section className="space-y-4 p-6">
            <Eyebrow>Información general</Eyebrow>

            <Field
              label="Nombre"
              name="name"
              placeholder="Ej. Cochinita Pibil"
              errors={state.errors?.name}
            />

            <div className="space-y-1.5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-neutral-700"
              >
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Breve descripción del platillo"
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
              {state.errors?.description && (
                <p className="text-xs text-red-600">
                  {state.errors.description[0]}
                </p>
              )}
            </div>
          </section>

          {/* Precio y categoría */}
          <section className="space-y-4 p-6">
            <Eyebrow>Precio y categoría</Eyebrow>

            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Precio"
                name="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                errors={state.errors?.price}
              />
              <Field
                label="Categoría"
                name="category"
                placeholder="Ej. Platillos fuertes"
                errors={state.errors?.category}
              />
            </div>
          </section>

          {/* Disponibilidad */}
          <section className="space-y-4 p-6">
            <Eyebrow>Disponibilidad</Eyebrow>

            <div className="space-y-1.5">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-neutral-700"
              >
                Estado
              </label>
              <select
                id="status"
                name="status"
                defaultValue="available"
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              >
                <option value="available">Disponible</option>
                <option value="unavailable">No disponible</option>
              </select>
              {state.errors?.status && (
                <p className="text-xs text-red-600">{state.errors.status[0]}</p>
              )}
            </div>
          </section>

          {/* Barra de acciones */}
          <div className="flex items-center justify-end gap-3 bg-neutral-50 px-6 py-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard/products")}
              className="rounded-md px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
            >
              {isPending ? "Guardando..." : "Crear producto"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}


function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
      {children}
    </p>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  step?: string;
  placeholder?: string;
  errors?: string[];
}

function Field({ label, name, type = "text", step, placeholder, errors }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        step={step}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
      />
      {errors && <p className="text-xs text-red-600">{errors[0]}</p>}
    </div>
  );
}