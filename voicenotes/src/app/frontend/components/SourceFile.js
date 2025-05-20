import React from "react";

export default function SourceFile({ filename, filepreview }) {
    return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold">{filename}</h3>
                <p className="text-sm text-gray-500">
                    Parsed Text:<br />{filepreview}
                </p>
            </div>
        </div>
    );
}
