import React, { useState } from "react";
import SourceFile from "./SourceFile";

export default function UploadForm() {
    const [fileData, setFileData] = useState(null);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("pdfFile", file);

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setFileData({
                    filename: file.name,
                    filepreview: data.content.slice(0, 500) // just first 500 chars
                });
            } else {
                alert(data.message || "Upload failed");
            }
        } catch (err) {
            console.error("Upload error:", err);
        }
    };

    return (
        <div className="space-y-4">
            <input type="file" accept=".pdf" onChange={handleFileUpload} />
            {fileData && <SourceFile {...fileData} />}
        </div>
    );
}
