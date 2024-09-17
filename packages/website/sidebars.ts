/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { SidebarItemConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

function createLibraryReferenceStructure(
  section: string,
  libName: string,
  labelName: string,
  hasLinterRules: boolean,
  extra?: SidebarItemConfig[],
): SidebarItemConfig {
  const rules: SidebarItemConfig = {
    type: "category",
    label: "Rules",
    items: [
      {
        type: "autogenerated",
        dirName: `${section}/${libName}/rules`,
      },
    ],
  };
  return {
    type: "category",
    label: labelName,
    link: {
      type: "doc",
      id: `${section}/${libName}/reference/index`,
    },
    items: [
      {
        type: "autogenerated",
        dirName: `${section}/${libName}/reference`,
      },
      ...(hasLinterRules ? [rules] : []),
      ...(extra ?? []),
    ],
  };
}

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      "Get started": [
        "getstarted/installation",
        "getstarted/createproject",
        {
          "Azure Data Plane Service": [
            {
              type: "autogenerated",
              dirName: "getstarted/azure-core",
            },
          ],
        },
        {
          "ARM Service": [
            {
              type: "autogenerated",
              dirName: "getstarted/azure-resource-manager",
            },
          ],
        },
      ],
    },
    {
      "Howtos & Examples": [
        {
          type: "autogenerated",
          dirName: "howtos",
        },
        "reference/azure-style-guide",
      ],
    },
    {
      "Convert Swagger to TypeSpec": [
        {
          type: "autogenerated",
          dirName: "migrate-swagger",
        },
      ],
    },
    {
      Libraries: [
        createLibraryReferenceStructure("libraries", "azure-core", "Azure.Core", true),
        createLibraryReferenceStructure(
          "libraries",
          "azure-resource-manager",
          "Azure.ResourceManager",
          true,
        ),
        createLibraryReferenceStructure(
          "libraries",
          "typespec-client-generator-core",
          "Azure.ClientGenerator.Core",
          false,
        ),
        createLibraryReferenceStructure("libraries", "azure-portal-core", "Azure.Portal", false),
      ],
    },
    {
      Emitters: [
        createLibraryReferenceStructure(
          "emitters",
          "typespec-autorest",
          "Autorest / Swagger",
          false,
        ),
      ],
    },
    {
      Troubleshoot: [
        {
          type: "autogenerated",
          dirName: "troubleshoot",
        },
      ],
    },
    {
      type: "category",
      label: "Release Notes",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Release Notes",
        slug: "/release-notes",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "release-notes",
        },
      ],
    },
  ],
};

export default sidebars;
