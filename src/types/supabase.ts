export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chatbot_interactions: {
        Row: {
          id: string
          created_at: string
          user_message: string
          bot_response: string 
          user_email: string | null
          user_name: string | null
          page_url: string | null
          session_id: string
          metadata: Json | null
          resolved: boolean
          followed_up: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          user_message: string
          bot_response: string
          user_email?: string | null
          user_name?: string | null
          page_url?: string | null
          session_id: string
          metadata?: Json | null
          resolved?: boolean
          followed_up?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          user_message?: string
          bot_response?: string
          user_email?: string | null
          user_name?: string | null
          page_url?: string | null
          session_id?: string
          metadata?: Json | null
          resolved?: boolean
          followed_up?: boolean
        }
      }
      lead_submissions: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string
          company: string | null
          phone: string | null
          message: string | null
          service_interest: string | null
          source: string | null
          status: string
          contacted: boolean
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          name: string
          company?: string | null
          phone?: string | null
          message?: string | null
          service_interest?: string | null
          source?: string | null
          status?: string
          contacted?: boolean
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          name?: string
          company?: string | null
          phone?: string | null
          message?: string | null
          service_interest?: string | null
          source?: string | null
          status?: string
          contacted?: boolean
          metadata?: Json | null
        }
      }
      testimonials: {
        Row: {
          id: string
          created_at: string
          author: string
          company: string
          quote: string
          impact_metric: string
          impact_value: string
          is_featured: boolean
          order: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          author: string
          company: string
          quote: string
          impact_metric: string
          impact_value: string
          is_featured?: boolean
          order?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          author?: string
          company?: string
          quote?: string
          impact_metric?: string
          impact_value?: string
          is_featured?: boolean
          order?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}