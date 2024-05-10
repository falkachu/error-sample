export{};

declare global {
     type Json =
        | string
        | number
        | boolean
        | null
        | { [key: string]: Json | undefined }
        | Json[];


     type Database = {
        public: {
            Tables: {
                Company: {
                    Row: {
                        contact_company: string;
                        contact_gp: string;
                        created_at: string | null;
                        created_by: string | null;
                        id: number;
                        location: string;
                        name: string;
                        parent_company: number | null;
                        updated_at: string | null;
                        updated_by: string | null;
                    };
                    Insert: {
                        contact_company: string;
                        contact_gp: string;
                        created_at?: string | null;
                        created_by?: string | null;
                        id?: number;
                        location: string;
                        name: string;
                        parent_company?: number | null;
                        updated_at?: string | null;
                        updated_by?: string | null;
                    };
                    Update: {
                        contact_company?: string;
                        contact_gp?: string;
                        created_at?: string | null;
                        created_by?: string | null;
                        id?: number;
                        location?: string;
                        name?: string;
                        parent_company?: number | null;
                        updated_at?: string | null;
                        updated_by?: string | null;
                    };
                    Relationships: [
                        {
                            foreignKeyName: "public_companies_created_by_fkey";
                            columns: ["created_by"];
                            isOneToOne: false;
                            referencedRelation: "users";
                            referencedColumns: ["id"];
                        },
                        {
                            foreignKeyName: "public_companies_parent_company_fkey";
                            columns: ["parent_company"];
                            isOneToOne: false;
                            referencedRelation: "Company";
                            referencedColumns: ["id"];
                        },
                        {
                            foreignKeyName: "public_companies_updated_by_fkey";
                            columns: ["updated_by"];
                            isOneToOne: false;
                            referencedRelation: "users";
                            referencedColumns: ["id"];
                        },
                    ];
                };
            };
            Views: {
                [_ in never]: never;
            };
            Functions: {
                [_ in never]: never;
            };
            CompositeTypes: {
                [_ in never]: never;
            };
        };
    };

    type PublicSchema = Database[Extract<keyof Database, "public">];

     type Tables<
        PublicTableNameOrOptions extends | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
            | { schema: keyof Database },
        TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
            ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
                Database[PublicTableNameOrOptions["schema"]]["Views"])
            : never = never,
    > = PublicTableNameOrOptions extends { schema: keyof Database }
        ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
            Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
                Row: infer R;
            }
            ? R
            : never
        : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
                PublicSchema["Views"])
            ? (PublicSchema["Tables"] &
                PublicSchema["Views"])[PublicTableNameOrOptions] extends {
                    Row: infer R;
                }
                ? R
                : never
            : never;

     type TablesInsert<
        PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
            | { schema: keyof Database },
        TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
            ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
            : never = never,
    > = PublicTableNameOrOptions extends { schema: keyof Database }
        ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
                Insert: infer I;
            }
            ? I
            : never
        : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
            ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                    Insert: infer I;
                }
                ? I
                : never
            : never;

     type TablesUpdate<
        PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
            | { schema: keyof Database },
        TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
            ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
            : never = never,
    > = PublicTableNameOrOptions extends { schema: keyof Database }
        ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
                Update: infer U;
            }
            ? U
            : never
        : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
            ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                    Update: infer U;
                }
                ? U
                : never
            : never;
}
