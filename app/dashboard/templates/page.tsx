"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useTracker } from "@/hooks/use-tracker";
import { Template } from "@/lib/types";
import { Plus, Trash2, Code2, Save, FileCode2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const defaultTemplates: Template[] = [
  {
    id: "t1",
    title: "Union Find (Disjoint Set)",
    language: "typescript",
    tags: ["graphs", "trees"],
    lastUpdated: new Date().toISOString(),
    code: `class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    }
    return false; // Already connected
  }
}`
  },
];

export default function TemplatesPage() {
  const { state, addTemplate, updateTemplate, deleteTemplate } = useTracker();
  
  // Use default templates if state is completely empty to give a good first impression
  const allTemplates = (state.templates && state.templates.length > 0) ? state.templates : defaultTemplates;
  
  const [activeId, setActiveId] = useState<string>(allTemplates[0]?.id || "");
  const activeTemplate = allTemplates.find((t) => t.id === activeId);

  const [code, setCode] = useState(activeTemplate?.code || "");
  const [title, setTitle] = useState(activeTemplate?.title || "");

  // Sync state when switching templates
  const switchTemplate = (id: string) => {
    const t = allTemplates.find(x => x.id === id);
    if (t) {
      setActiveId(id);
      setCode(t.code);
      setTitle(t.title);
    }
  };

  const handleSave = () => {
    if (!activeId) return;
    
    // Check if we need to migrate a default template into state
    const isDefault = defaultTemplates.some(dt => dt.id === activeId) && (!state.templates || !state.templates.find(st => st.id === activeId));
    
    if (isDefault) {
      addTemplate({ id: activeId, title, code, language: "typescript", tags: [], lastUpdated: new Date().toISOString() });
    } else {
      updateTemplate(activeId, { title, code, lastUpdated: new Date().toISOString() });
    }
  };

  const handleCreate = () => {
    const newId = Math.random().toString(36).substring(7);
    const newTemp = { id: newId, title: "Untitled Template", code: "// start coding here...", language: "typescript", tags: [], lastUpdated: new Date().toISOString() };
    addTemplate(newTemp);
    setActiveId(newId);
    setCode(newTemp.code);
    setTitle(newTemp.title);
  };

  const handleDelete = (id: string) => {
    deleteTemplate(id);
    if (activeId === id) {
      const next = allTemplates.find(t => t.id !== id);
      if (next) switchTemplate(next.id);
      else {
        setActiveId("");
        setCode("");
        setTitle("");
      }
    }
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-[1480px] animate-[fadeIn_0.35s_ease-out]">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[.25em] text-lime"><span className="h-px w-6 bg-lime" /> Snippet Vault</div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Algorithm Templates</h1>
          </div>
          <Button onClick={handleCreate} className="bg-lime text-black hover:bg-lime/90 font-bold gap-2">
            <Plus size={16} /> New Template
          </Button>
        </div>

        <div className="grid h-[70vh] min-h-[600px] grid-cols-1 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-[300px_1fr]">
          
          {/* Sidebar */}
          <div className="flex flex-col border-r border-white/10 bg-black/40 backdrop-blur-md">
            <div className="border-b border-white/5 p-4">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input placeholder="Search templates..." className="w-full rounded-lg bg-white/[.03] py-2 pl-9 pr-4 text-xs outline-none focus:bg-white/[.05] focus:ring-1 focus:ring-lime/30" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
              {allTemplates.map(t => (
                <button
                  key={t.id}
                  onClick={() => switchTemplate(t.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-colors ${activeId === t.id ? "bg-lime/10 text-lime" : "text-zinc-400 hover:bg-white/[.03] hover:text-zinc-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <FileCode2 size={16} className={activeId === t.id ? "text-lime" : "text-zinc-600"} />
                    <span className="text-sm font-medium">{t.title}</span>
                  </div>
                  {activeId === t.id && (
                    <button onClick={(e) => { e.stopPropagation(); handleDelete(t.id); }} className="text-zinc-500 hover:text-rose-400">
                      <Trash2 size={14} />
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div className="flex flex-col bg-[#0b100d]">
            {activeTemplate ? (
              <>
                <div className="flex items-center justify-between border-b border-white/5 bg-black/20 px-5 py-3">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-transparent text-lg font-bold text-white outline-none w-1/2 placeholder:text-zinc-700"
                    placeholder="Template Title"
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-zinc-500">Language: {activeTemplate.language}</span>
                    <Button size="sm" onClick={handleSave} className="gap-2 bg-white/10 hover:bg-white/20 text-white">
                      <Save size={14} /> Save
                    </Button>
                  </div>
                </div>
                <div className="flex-1 relative">
                  {/* Line numbers mock */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-white/5 bg-black/40 text-right font-mono text-[11px] text-zinc-700 py-4 pr-3 select-none">
                    {Array.from({ length: 50 }).map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck={false}
                    className="absolute inset-0 pl-[60px] pr-4 py-4 bg-transparent font-mono text-xs leading-6 text-zinc-300 outline-none resize-none scrollbar-hide focus:ring-0"
                  />
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-zinc-600">
                <Code2 size={48} className="mb-4 opacity-20" />
                <p>Select a template or create a new one</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
