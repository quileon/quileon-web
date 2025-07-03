"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import * as actions from "@/app/actions";

interface BlogSearchClientProps {
  topic?: string;
  title?: string;
  uniqueTopicList: string[];
}

export default function BlogSearchClient({
  uniqueTopicList,
  topic,
  title,
}: BlogSearchClientProps) {
  return (
    <form
      action={actions.searchBlogs}
      className="flex flex-col sm:flex-row gap-4 sm:px-10 sm:items-center"
    >
      <Autocomplete
        key={topic || "all"}
        className="sm:w-1/4"
        defaultSelectedKey={topic}
        label="Search by topic"
        name="topic"
      >
        {uniqueTopicList.map((topic) => (
          <AutocompleteItem key={topic}>{topic}</AutocompleteItem>
        ))}
      </Autocomplete>
      <Input
        isClearable
        className="sm:w-2/3"
        defaultValue={title}
        label="Search by title"
        name="title"
      />
      <Button className="sm:w-1/12" color="primary" size="lg" type="submit">
        Search
      </Button>
    </form>
  );
}
