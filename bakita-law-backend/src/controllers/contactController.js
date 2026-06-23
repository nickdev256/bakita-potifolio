
import { supabase } from "../config/supabase.js";

export const createContact = async (
  req,
  res
) => {
  try {

    const {
      full_name,
      email,
      subject,
      message,
    } = req.body;

    const { data, error } =
      await supabase
        .from("contacts")
        .insert([
          {
            full_name,
            email,
            subject,
            message,
          },
        ]);

    if (error) throw error;

    res.status(201).json({
      success: true,
      message:
        "Message sent successfully",
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

