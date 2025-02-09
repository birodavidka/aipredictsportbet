import { onSchedule } from "firebase-functions/v2/scheduler";
import { exec } from "child_process";

// 🔥 AI Modell automatikus futtatása minden 24 órában
export const runAIModel = onSchedule("every 24 hours", async () => {
  exec("python functions/src/ai_model.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Hiba az AI modell futtatása közben: ${error.message}`);
      return;
    }
    console.log(`AI Modell kimenete: ${stdout}`);
  });
});
