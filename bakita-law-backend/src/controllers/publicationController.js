import { supabase } from "../config/supabase.js";

export const getPublications = async (
  req,
  res
) => {
  try {
    const { data, error } = await supabase
      .from("publications")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};