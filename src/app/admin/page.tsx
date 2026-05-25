"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const router = useRouter();
	const [checkingAuth, setCheckingAuth] =
  useState(true);

useEffect(() => {
  checkUser();
}, []);

async function checkUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    router.push("/login");

    return;
  }

  setCheckingAuth(false);
}

  const [previewImage, setPreviewImage] =
    useState<string | null>(null);

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [products, setProducts] =
    useState<any[]>([]);

  const [productName, setProductName] =
    useState("");

  const [productCategory, setProductCategory] =
    useState("");

  const [productPrice, setProductPrice] =
    useState("");

  const [productStatus, setProductStatus] =
    useState("Published");

  const [goldPrice, setGoldPrice] =
    useState("7450");

  const [silverPrice, setSilverPrice] =
    useState("98");

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [deleteIndex, setDeleteIndex] =
    useState<number | null>(null);

  useEffect(() => {
  fetchProducts();
  fetchMetalPrices();
}, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.log(error);

      return;
    }

    setProducts(data || []);
  }
async function fetchMetalPrices() {
  const { data, error } = await supabase
    .from("metal_prices")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.log(error);

    return;
  }

  setGoldPrice(data.gold_22k || "");
  setSilverPrice(data.silver || "");
}
  async function uploadImage(
    file: File
  ) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase
      .storage
      .from("products")
      .upload(fileName, file);

    if (error) {
      console.log(error);

      return null;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    return publicUrl;
  }
if (checkingAuth) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040816] text-white">
      Checking Authentication...
    </main>
  );
}

  return (
    <main className="min-h-screen bg-[#040816] text-white">
      
      {/* Header */}
      <header className="border-b border-white/5 bg-black/30 backdrop-blur-xl">
        
        <div className="mx-auto flex flex-col gap-4 px-6 py-6 lg:h-20 lg:max-w-[1600px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              RR Jewellers Admin
            </p>

            <h1
              className="mt-2 text-3xl text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Dashboard
            </h1>
          </div>

          <button
            onClick={async () => {
              await supabase.auth.signOut();

              router.push("/login");
            }}
            className="rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <section className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10">
        
        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Products */}
          <div className="rounded-[28px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Total Products
            </p>

            <h2 className="mt-5 text-5xl text-white">
              {products.length}
            </h2>
          </div>

          {/* Gold Price */}
          <div className="rounded-[28px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              22K Gold Price
            </p>

            <h2 className="mt-5 text-5xl text-white">
              ₹{Number(goldPrice).toLocaleString("en-IN")}
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Updated Today
            </p>
          </div>

          {/* Enquiries */}
          <div className="rounded-[28px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
            
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              New Enquiries
            </p>

            <h2 className="mt-5 text-5xl text-white">
              18
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Product Management */}
          <div className="rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                  Product Management
                </p>

                <h2
                  className="mt-3 text-4xl text-white"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  Jewellery Catalogue
                </h2>
              </div>

              <button className="rounded-md bg-[#D4AF37] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]">
                Add Product
              </button>
            </div>

            {/* Table */}
            <div className="mt-10 overflow-x-auto rounded-[24px] border border-white/5">
              
              <table className="w-full min-w-[700px]">
                
                <thead className="bg-white/5">
                  <tr>
                    
                    <th className="px-6 py-5 text-left text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                      Product
                    </th>

                    <th className="px-6 py-5 text-left text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                      Category
                    </th>

                    <th className="px-6 py-5 text-left text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                      Price
                    </th>

                    <th className="px-6 py-5 text-left text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                      Status
                    </th>

                    <th className="px-6 py-5 text-left text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.id}
                      className="border-t border-white/5 transition hover:bg-white/[0.03]"
                    >
                      
                      <td className="px-6 py-5">
                        
                        <div className="flex items-center gap-4">
                          
                          <div
                            className="h-16 w-16 rounded-2xl bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${product.image})`,
                            }}
                          />

                          <div>
                            <p className="text-white">
                              {product.name}
                            </p>

                            <p className="mt-1 text-sm text-white/40">
                              RR Jewellers
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-white/70">
                        {product.category}
                      </td>

                      <td className="px-6 py-5 text-white">
                        {product.price}
                      </td>

                      <td className="px-6 py-5">
                        
                        <span
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em]
                          ${
                            product.status === "Published"
                              ? "border border-green-500/20 bg-green-500/10 text-green-400"
                              : "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        
                        <div className="flex gap-3">
                          
                          <button
                            onClick={() => {
                              setProductName(product.name);

                              setProductCategory(product.category);

                              setProductPrice(product.price);

                              setProductStatus(product.status);

                              setPreviewImage(product.image);

                              setEditingIndex(index);
                            }}
                            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/70 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => {
                              setDeleteIndex(index);
                            }}
                            className="rounded-lg border border-red-500/10 bg-red-500/5 px-4 py-2 text-xs uppercase tracking-[0.15em] text-red-400 transition hover:bg-red-500/10"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            
            {/* Gold Price Update */}
            <div className="rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Gold Price Control
              </p>

              <h2
                className="mt-3 text-3xl text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Update Prices
              </h2>

              <div className="mt-8 space-y-5">
                
                <input
                  type="text"
                  placeholder="22K Gold Price"
                  value={goldPrice}
                  onChange={(e) =>
                    setGoldPrice(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                />

                <input
                  type="text"
                  placeholder="Silver Price"
                  value={silverPrice}
                  onChange={(e) =>
                    setSilverPrice(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                />

               <button
  onClick={async () => {
    const { error } = await supabase
      .from("metal_prices")
      .update({
        gold_22k: goldPrice,
        silver: silverPrice,
      })
      .eq("id", 1);

    if (error) {
      console.log(error);

      return;
    }

    await fetchMetalPrices();
  }}
  className="w-full rounded-xl bg-[#D4AF37] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]"
>
  Update Prices
</button>
              </div>
            </div>

            {/* Quick Add */}
            <div className="rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Quick Add
              </p>

              <h2
                className="mt-3 text-3xl text-white"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Upload Jewellery
              </h2>

              <div className="mt-8 space-y-5">
                
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) =>
                    setProductName(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                />

                <select
                  value={productCategory}
                  onChange={(e) =>
                    setProductCategory(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                >
                  <option value="">
                    Select Category
                  </option>

                  <option>Necklaces</option>
                  <option>Rings</option>
                  <option>Bangles</option>
                  <option>Bridal</option>
                  <option>Pendants</option>
                  <option>Earrings</option>
                  <option>Silver</option>
                </select>

                <select className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]">
                  
                  <option>Select Purity</option>

                  <option>18K</option>
                  <option>22K</option>
                  <option>24K</option>
                  <option>Silver 925</option>
                </select>

                <input
                  type="text"
                  placeholder="Weight in grams"
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                />

                <input
                  type="text"
                  placeholder="Approximate Price"
                  value={productPrice}
                  onChange={(e) =>
                    setProductPrice(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                />

                <select
                  value={productStatus}
                  onChange={(e) =>
                    setProductStatus(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
                >
                  <option>Published</option>
                  <option>Draft</option>
                </select>

                <label className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4">
                  
                  <span className="text-sm text-white/80">
                    Featured Product
                  </span>

                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#D4AF37]"
                  />
                </label>

                <div className="space-y-4">
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        setImageFile(file);

                        setPreviewImage(
                          URL.createObjectURL(file)
                        );
                      }
                    }}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white"
                  />

                  {previewImage && (
                    <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20">
                      
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={async () => {
                    if (
                      !productName ||
                      !productCategory ||
                      !productPrice
                    ) {
                      return;
                    }

                    let uploadedImageUrl = "";

                    if (imageFile) {
                      const uploadedUrl =
                        await uploadImage(
                          imageFile
                        );

                      if (uploadedUrl) {
                        uploadedImageUrl =
                          uploadedUrl;
                      }
                    }

                    const newProduct = {
                      name: productName,
                      category: productCategory,
                      price: productPrice,
                      status: productStatus,
                      image:
                        uploadedImageUrl,
                    };

                    if (editingIndex !== null) {
                      const productToEdit =
                        products[editingIndex];

                      const { error } =
                        await supabase
                          .from("products")
                          .update({
                            name: newProduct.name,

                            category:
                              newProduct.category,

                            price:
                              newProduct.price,

                            status:
                              newProduct.status,

                            image:
                              newProduct.image,
                          })
                          .eq(
                            "id",
                            productToEdit.id
                          );

                      if (error) {
                        console.log(error);

                        return;
                      }

                      setEditingIndex(null);
                    } else {
                      const { error } =
                        await supabase
                          .from("products")
                          .insert([
                            {
                              name:
                                newProduct.name,

                              category:
                                newProduct.category,

                              price:
                                newProduct.price,

                              status:
                                newProduct.status,

                              image:
                                newProduct.image,
                            },
                          ]);

                      if (error) {
                        console.log(error);

                        return;
                      }
                    }

                    await fetchProducts();

                    setProductName("");
                    setProductCategory("");
                    setProductPrice("");
                    setProductStatus("Published");
                    setPreviewImage(null);
                    setImageFile(null);
                  }}
                  className="w-full rounded-xl bg-[#D4AF37] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]"
                >
                  {editingIndex !== null
                    ? "Update Product"
                    : "Publish Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {deleteIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          
          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#0B0E1A] p-8">
            
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Confirm Delete
            </p>

            <h2
              className="mt-4 text-3xl text-white"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Delete Product?
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/60">
              This action cannot be undone. The product will be permanently removed from the catalogue.
            </p>

            <div className="mt-10 flex gap-4">
              
              <button
                onClick={() => {
                  setDeleteIndex(null);
                }}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  const productToDelete =
                    products[deleteIndex];

                  const { error } =
                    await supabase
                      .from("products")
                      .delete()
                      .eq(
                        "id",
                        productToDelete.id
                      );

                  if (error) {
                    console.log(error);

                    return;
                  }

                  await fetchProducts();

                  setDeleteIndex(null);
                }}
                className="flex-1 rounded-xl bg-red-500 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}