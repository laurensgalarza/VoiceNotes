// components/SourceFile.js
import React from "react";

export default function SourceFile({ filename, filepreview }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 space-y-2">
            <h3 className="font-semibold">{filename}</h3>
            <p className="text-sm text-gray-500">
                Parsed Text:<br />{filepreview}
            </p>
        </div>
    );
}
