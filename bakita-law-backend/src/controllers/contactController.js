
import { supabase } from "../config/supabase.js";

import {
  sendContactEmail,
  sendConfirmationEmail,
} from "../services/emailService.js";

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
        ])
        .select();

    if (error) throw error;

    // Notify Bakita

    await sendContactEmail({
      full_name,
      email,
      subject,
      message,
    });

    // Send confirmation to visitor

    await sendConfirmationEmail({
      full_name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message:
        "Message sent successfully",
      data,
    });

  } catch (error) {

    console.error(
      "Contact Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Something went wrong",
    });

  }
};

