
import { supabase } from "../config/supabase.js";

export const getPublications = async (
  req,
  res
) => {
  try {

    const { data, error } =
      await supabase
        .from("publications")
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

    if (error) throw error;

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

export const createPublication =
  async (req, res) => {
    try {

      const {
        title,
        description,
        category,
        image_url,
        content,
        status,
        publication_year,
        pages,
        featured,
      } = req.body;

      const { data, error } =
        await supabase
          .from("publications")
          .insert([
            {
              title,
              description,
              category,
              image_url,
              content,
              status,
              publication_year,
              pages,
              featured,
            },
          ])
          .select();

      if (error) throw error;

      res.status(201).json({
        success: true,
        message:
          "Publication created successfully",
        data,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

