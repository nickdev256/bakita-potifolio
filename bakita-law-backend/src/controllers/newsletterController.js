
import { supabase } from "../config/supabase.js";

export const subscribe = async (
  req,
  res
) => {
  try {

    const { email } = req.body;

    const { data, error } =
      await supabase
        .from("newsletter")
        .insert([{ email }]);

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getSubscribers =
  async (req, res) => {
    try {

      const { data, error } =
        await supabase
          .from("newsletter")
          .select("*");

      if (error) throw error;

      res.status(200).json(data);

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };

